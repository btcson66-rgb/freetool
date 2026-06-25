# -*- coding: utf-8 -*-
from __future__ import annotations

from pathlib import Path
import math
import subprocess
import wave

import imageio.v2 as imageio
import imageio_ffmpeg
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(r"D:\FreeTools\reports\social")
ASSETS = ROOT / "pdf_video_assets"
TEMP_VIDEO = ROOT / "FreeTools-pdf-promo-vertical-2026-06-23-silent.mp4"
MUSIC_WAV = ROOT / "FreeTools-pdf-promo-bgm-2026-06-23.wav"
OUTPUT = ROOT / "FreeTools-pdf-promo-vertical-2026-06-23.mp4"
WIDTH, HEIGHT = 1080, 1920
FPS = 30
TRANSITION_FRAMES = int(0.45 * FPS)
SAMPLE_RATE = 44100
ASPECT = HEIGHT / WIDTH

SCENES = [
    {
        "image": ASSETS / "pdf_intro.png",
        "title": "PDF 功能，一支影片快速看懂",
        "subtitle": "FreeTools 把常見的 PDF 小需求整理成打開就能用的工具",
        "tag": "PDF TOOLS",
        "duration": 4.8,
        "crop_start": (0, 90, 860),
        "crop_end": (20, 180, 840),
    },
    {
        "image": ASSETS / "merge_done.png",
        "title": "多份檔案，直接合併成一份 PDF",
        "subtitle": "上傳後可先確認頁數，再依順序整合成單一檔案",
        "tag": "MERGE",
        "duration": 5.6,
        "crop_start": (0, 120, 820),
        "crop_end": (0, 240, 800),
    },
    {
        "image": ASSETS / "split_done.png",
        "title": "只要特定頁？拆分也很快",
        "subtitle": "可依頁碼範圍拆出需要的章節或附件頁面",
        "tag": "SPLIT",
        "duration": 5.6,
        "crop_start": (0, 120, 820),
        "crop_end": (0, 240, 800),
    },
    {
        "image": ASSETS / "reorder_done.png",
        "title": "頁面順序亂了，直接重新排列",
        "subtitle": "不用重做內容，調整頁序後就能下載新的 PDF",
        "tag": "REORDER",
        "duration": 5.4,
        "crop_start": (0, 120, 820),
        "crop_end": (0, 220, 800),
    },
    {
        "image": ASSETS / "pdf_to_image_done.png",
        "title": "也能把 PDF 頁面轉成圖片",
        "subtitle": "做預覽、做簡報素材、擷取單頁都很方便",
        "tag": "PDF TO IMAGE",
        "duration": 5.6,
        "crop_start": (0, 120, 820),
        "crop_end": (0, 220, 800),
    },
    {
        "image": ASSETS / "merge_done.png",
        "title": "先收藏，需要時直接用",
        "subtitle": "FreeTools.win",
        "tag": "TRY NOW",
        "duration": 4.8,
        "crop_start": (10, 220, 820),
        "crop_end": (0, 120, 860),
    },
]

FONT_PATH = r"C:\Windows\Fonts\msjh.ttc"
FONT_TITLE = ImageFont.truetype(FONT_PATH, 62)
FONT_SUBTITLE = ImageFont.truetype(FONT_PATH, 35)
FONT_TAG = ImageFont.truetype(FONT_PATH, 25)
FONT_BRAND = ImageFont.truetype(FONT_PATH, 30)
FONT_CTA = ImageFont.truetype(FONT_PATH, 30)


def ease(value: float) -> float:
    clamped = max(0.0, min(1.0, value))
    return 0.5 - 0.5 * math.cos(math.pi * clamped)


def rounded_box(size: tuple[int, int], color: tuple[int, int, int, int], radius: int) -> Image.Image:
    image = Image.new("RGBA", size, color)
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    image.putalpha(mask)
    return image


def scene_crop(image: Image.Image, crop_spec: tuple[float, float, float]) -> Image.Image:
    x, y, width = crop_spec
    source_w, source_h = image.size
    width = min(width, source_w)
    height = min(int(width * ASPECT), source_h)
    if height == source_h:
        width = min(int(height / ASPECT), source_w)
    x = max(0, min(int(x), source_w - int(width)))
    y = max(0, min(int(y), source_h - int(height)))
    crop = image.crop((x, y, x + int(width), y + int(height)))
    resized = crop.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    return resized.filter(ImageFilter.UnsharpMask(radius=1.6, percent=170, threshold=2))


def render_background(image: Image.Image, start_crop: tuple[float, float, float], end_crop: tuple[float, float, float], progress: float) -> Image.Image:
    crop_spec = tuple(start + (end - start) * ease(progress) for start, end in zip(start_crop, end_crop))
    return scene_crop(image, crop_spec)


def draw_overlay(base: Image.Image, title: str, subtitle: str, tag: str, end_card: bool = False) -> Image.Image:
    image = base.copy().convert("RGBA")
    draw = ImageDraw.Draw(image)

    top_gradient = Image.new("L", (1, 420))
    for y in range(420):
        top_gradient.putpixel((0, y), int(150 * (1 - y / 420)))
    top_alpha = top_gradient.resize((WIDTH, 420))
    top_overlay = Image.new("RGBA", (WIDTH, 420), (4, 17, 31, 0))
    top_overlay.putalpha(top_alpha)
    image.alpha_composite(top_overlay, (0, 0))

    card_height = 410 if end_card else 350
    card = rounded_box((WIDTH - 56, card_height), (7, 18, 33, 210), 42)
    image.alpha_composite(card, (28, HEIGHT - card_height - 36))

    pill_width = max(190, int(draw.textlength(tag, font=FONT_TAG) + 52))
    pill = rounded_box((pill_width, 54), (20, 184, 166, 255), 27)
    image.alpha_composite(pill, (52, HEIGHT - card_height - 12))

    draw = ImageDraw.Draw(image)
    draw.text((78, HEIGHT - card_height - 1), tag, font=FONT_TAG, fill="white")

    text_x = 60
    text_y = HEIGHT - card_height + 58
    draw.text((text_x, text_y), title, font=FONT_TITLE, fill="white")
    draw.text((text_x, text_y + 96), subtitle, font=FONT_SUBTITLE, fill=(232, 239, 246))

    brand = "FreeTools"
    brand_width = int(draw.textlength(brand, font=FONT_BRAND) + 42)
    brand_box = rounded_box((brand_width, 50), (255, 255, 255, 236), 24)
    image.alpha_composite(brand_box, (34, 32))
    draw.text((58, 40), brand, font=FONT_BRAND, fill=(11, 120, 111))

    if end_card:
        button = rounded_box((332, 66), (20, 184, 166, 255), 33)
        button_x = 60
        button_y = HEIGHT - 156
        image.alpha_composite(button, (button_x, button_y))
        draw.text((button_x + 28, button_y + 16), "先收藏，需要時直接用", font=FONT_CTA, fill="white")

    return image.convert("RGB")


def make_scene_frames(scene: dict) -> list[np.ndarray]:
    source = Image.open(scene["image"]).convert("RGB")
    total_frames = int(scene["duration"] * FPS)
    frames: list[np.ndarray] = []
    for index in range(total_frames):
        progress = index / max(1, total_frames - 1)
        background = render_background(source, scene["crop_start"], scene["crop_end"], progress)
        frame = draw_overlay(
            background,
            scene["title"],
            scene["subtitle"],
            scene["tag"],
            end_card=scene["tag"] == "TRY NOW",
        )
        frames.append(np.asarray(frame))
    return frames


def build_video_frames() -> list[np.ndarray]:
    frames: list[np.ndarray] = []
    previous_last: np.ndarray | None = None
    for scene in SCENES:
        scene_frames = make_scene_frames(scene)
        if previous_last is not None:
            next_first = scene_frames[0]
            for index in range(TRANSITION_FRAMES):
                alpha = index / TRANSITION_FRAMES
                mixed = (previous_last.astype(np.float32) * (1 - alpha) + next_first.astype(np.float32) * alpha).astype(
                    np.uint8
                )
                frames.append(mixed)
        frames.extend(scene_frames)
        previous_last = scene_frames[-1]
    return frames


def synth_tone(freq: float, duration: float, volume: float) -> np.ndarray:
    samples = int(duration * SAMPLE_RATE)
    t = np.linspace(0, duration, samples, endpoint=False)
    envelope = np.minimum(1.0, t * 6) * np.minimum(1.0, (duration - t) * 4)
    return np.sin(2 * np.pi * freq * t) * envelope * volume


def build_music(total_duration: float) -> np.ndarray:
    samples = int(total_duration * SAMPLE_RATE)
    audio = np.zeros(samples, dtype=np.float32)
    beat_duration = 60 / 100

    progression = [
        (220.00, 277.18, 329.63),
        (246.94, 311.13, 369.99),
        (196.00, 246.94, 293.66),
        (174.61, 220.00, 261.63),
    ]

    current = 0.0
    chord_index = 0
    while current < total_duration:
        chord = progression[chord_index % len(progression)]
        for freq in chord:
            tone = synth_tone(freq, beat_duration * 4, 0.026)
            start = int(current * SAMPLE_RATE)
            end = min(samples, start + len(tone))
            audio[start:end] += tone[: end - start]

        for beat in range(4):
            beat_start = current + beat * beat_duration
            if beat_start >= total_duration:
                break
            start = int(beat_start * SAMPLE_RATE)
            kick_len = int(0.12 * SAMPLE_RATE)
            kick_t = np.linspace(0, 0.12, kick_len, endpoint=False)
            kick = np.sin(2 * np.pi * (110 - 60 * kick_t) * kick_t) * np.exp(-26 * kick_t) * 0.10
            end = min(samples, start + kick_len)
            audio[start:end] += kick[: end - start]

            hat_start = start + int(0.24 * SAMPLE_RATE)
            hat_len = int(0.06 * SAMPLE_RATE)
            if hat_start < samples:
                noise = (np.random.rand(hat_len) * 2 - 1).astype(np.float32)
                hat_env = np.exp(-60 * np.linspace(0, 0.06, hat_len, endpoint=False))
                hat = noise * hat_env * 0.015
                end = min(samples, hat_start + hat_len)
                audio[hat_start:end] += hat[: end - hat_start]

        current += beat_duration * 4
        chord_index += 1

    lead_times = np.arange(0.0, total_duration, beat_duration * 2)
    lead_notes = [659.25, 587.33, 523.25, 493.88, 523.25, 587.33]
    for idx, note_time in enumerate(lead_times):
        tone = synth_tone(lead_notes[idx % len(lead_notes)], beat_duration * 0.9, 0.018)
        start = int(note_time * SAMPLE_RATE)
        end = min(samples, start + len(tone))
        audio[start:end] += tone[: end - start]

    audio = np.clip(audio, -0.95, 0.95)
    fade = int(0.8 * SAMPLE_RATE)
    audio[:fade] *= np.linspace(0, 1, fade)
    audio[-fade:] *= np.linspace(1, 0, fade)
    return audio


def write_music(track: np.ndarray, path: Path) -> None:
    pcm = np.int16(track * 32767)
    stereo = np.column_stack([pcm, pcm]).ravel()
    with wave.open(str(path), "wb") as wav_file:
        wav_file.setnchannels(2)
        wav_file.setsampwidth(2)
        wav_file.setframerate(SAMPLE_RATE)
        wav_file.writeframes(stereo.tobytes())


def render_silent_video(frames: list[np.ndarray]) -> None:
    writer = imageio.get_writer(
        str(TEMP_VIDEO),
        fps=FPS,
        codec="libx264",
        quality=10,
        macro_block_size=None,
        ffmpeg_params=["-crf", "14", "-preset", "slow", "-pix_fmt", "yuv420p"],
    )
    for frame in frames:
        writer.append_data(frame)
    writer.close()


def mux_audio() -> None:
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    command = [
        ffmpeg,
        "-y",
        "-i",
        str(TEMP_VIDEO),
        "-i",
        str(MUSIC_WAV),
        "-c:v",
        "copy",
        "-c:a",
        "aac",
        "-b:a",
        "192k",
        "-shortest",
        str(OUTPUT),
    ]
    subprocess.run(command, check=True)


def main() -> None:
    frames = build_video_frames()
    total_duration = len(frames) / FPS
    music = build_music(total_duration)
    render_silent_video(frames)
    write_music(music, MUSIC_WAV)
    mux_audio()
    print(OUTPUT)
    print(f"frames={len(frames)}")
    print(f"duration={total_duration:.2f}")


if __name__ == "__main__":
    main()

# -*- coding: utf-8 -*-
from __future__ import annotations

from pathlib import Path
import math

import imageio.v2 as imageio
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(r"D:\FreeTools\reports\social")
ASSETS = ROOT / "video_assets"
OUTFILE = ROOT / "FreeTools-promo-vertical-2026-06-23.mp4"
WIDTH, HEIGHT = 1080, 1920
FPS = 30
TRANSITION_FRAMES = int(0.45 * FPS)
ASPECT = HEIGHT / WIDTH

SCENES = [
    {
        "image": ASSETS / "home_live.png",
        "title": "打開網頁就能用的實用工具",
        "subtitle": "FreeTools 把常用功能整理成免安裝的線上工具箱",
        "tag": "FreeTools",
        "duration": 4.8,
        "crop_start": (60, 120, 900),
        "crop_end": (40, 250, 900),
    },
    {
        "image": ASSETS / "qr_done.png",
        "title": "網址一貼，直接做成 QR Code",
        "subtitle": "活動連結、表單、菜單都能快速產生並下載 PNG",
        "tag": "QR CODE",
        "duration": 5.8,
        "crop_start": (10, 180, 820),
        "crop_end": (30, 260, 800),
    },
    {
        "image": ASSETS / "compress_done.png",
        "title": "圖片太大？先壓縮再上傳",
        "subtitle": "示範畫面從 1.10 MB 壓到 110.7 KB，直接在瀏覽器完成",
        "tag": "IMAGE",
        "duration": 5.8,
        "crop_start": (10, 120, 830),
        "crop_end": (20, 220, 810),
    },
    {
        "image": ASSETS / "groups_done.png",
        "title": "貼上名單，幾秒完成分組",
        "subtitle": "老師、活動主持、工作坊分組都很直覺",
        "tag": "GROUPS",
        "duration": 5.8,
        "crop_start": (10, 120, 830),
        "crop_end": (10, 250, 810),
    },
    {
        "image": ASSETS / "home_live.png",
        "title": "先收藏，需要時直接用",
        "subtitle": "FreeTools.win",
        "tag": "TRY NOW",
        "duration": 4.8,
        "crop_start": (90, 300, 860),
        "crop_end": (60, 200, 900),
    },
]

FONT_PATH = r"C:\Windows\Fonts\msjh.ttc"
FONT_TITLE = ImageFont.truetype(FONT_PATH, 66)
FONT_SUBTITLE = ImageFont.truetype(FONT_PATH, 36)
FONT_TAG = ImageFont.truetype(FONT_PATH, 26)
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
    text_y = HEIGHT - card_height + 60
    draw.text((text_x, text_y), title, font=FONT_TITLE, fill="white")
    draw.text((text_x, text_y + 100), subtitle, font=FONT_SUBTITLE, fill=(232, 239, 246))

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


def build_frames() -> list[np.ndarray]:
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


def main() -> None:
    frames = build_frames()
    writer = imageio.get_writer(
        str(OUTFILE),
        fps=FPS,
        codec="libx264",
        quality=10,
        macro_block_size=None,
        ffmpeg_params=["-crf", "14", "-preset", "slow", "-pix_fmt", "yuv420p"],
    )
    for frame in frames:
        writer.append_data(frame)
    writer.close()
    print(OUTFILE)
    print(f"frames={len(frames)}")


if __name__ == "__main__":
    main()

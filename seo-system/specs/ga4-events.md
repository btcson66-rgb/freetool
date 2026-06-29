# GA4 Tool Event Specification

All tool events must avoid user-entered private content. Do not send text, filenames, PDF contents, image contents, generated passwords, QR payloads, or raw form values.

## Required Events

| Event | When to send | Required params |
| --- | --- | --- |
| `article_cta_click` | User clicks a tool CTA from article, guide, or workflow content | `article_id`, `target_type`, `page_path` |
| `related_tool_click` | User clicks a related tool card | `tool_id`, `source_tool_id`, `page_path` |
| `hub_click` | User clicks a hub/category/content index link | `hub_id`, `page_path` |
| `tool_use_started` | First meaningful user interaction inside a tool | `tool_id`, `category`, `page_path` |
| `tool_use_completed` | Tool visibly creates or updates a result | `tool_id`, `category`, `page_path` |
| `tool_start` | First meaningful user interaction inside a tool | `tool_id`, `tool_category`, `page_path` |
| `file_select` | User selects one or more local files | `tool_id`, `tool_category`, `page_path` |
| `generate_result` | Tool creates or updates a result | `tool_id`, `tool_category`, `page_path` |
| `download_result` | User downloads an output file | `tool_id`, `tool_category`, `page_path` |
| `copy_result` | User copies a generated result | `tool_id`, `tool_category`, `page_path` |
| `share_click` | User clicks a share button | `tool_id`, `tool_category`, `page_path` |

## Parameter Rules

- `tool_id`: stable slug, for example `merge-pdf`.
- `tool_category`: stable category id, for example `pdf`.
- `page_path`: `location.pathname`, without query string or hash.
- Optional diagnostic params must be generic only, for example `control_type`, `result_type`, or `error_type`.

## Migration Note

Current live code emits older events such as `tool_view`, `tool_started`, `tool_completed`, `file_download`, `tool_use_start`, `tool_use_success`, and `result_action`. Keep those only as legacy aliases during migration; new reports should normalize them to the required names above.

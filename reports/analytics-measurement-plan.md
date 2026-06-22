# FunnyTools analytics measurement plan

Date: 2026-06-22

## Decision goals

- Identify which acquisition campaigns produce actual tool use instead of page views only.
- Rank tool and category investment by starts, completions, downloads, and repeat use.
- Measure sharing and affiliate-resource clicks without collecting user-entered content.

## GA4 events

| Event | Trigger | Parameters |
| --- | --- | --- |
| `tool_view` | Tool page loads | `tool_slug`, `tool_name`, `tool_category`, `tool_language` |
| `tool_started` | First tool control interaction | Tool parameters plus `control_type` |
| `tool_action` | Primary tool button is selected | Tool parameters plus `action_name` |
| `tool_completed` | A visible result region updates after a tool start | Tool parameters |
| `result_action` | Copy-result control is selected | Tool parameters plus `result_action` |
| `file_download` | Enabled download or export control is selected | Tool parameters plus `download_action` |
| `tool_error` | A visible error region updates | Tool parameters plus a non-sensitive `error_type` |
| `share` | Share or copy-link control is selected | `method`, `content_type` |
| `affiliate_click` | A curated external resource is selected | `item_id`, `affiliate_platform`, `link_domain` |

No input values, filenames, result text, error text, email addresses, or other user-provided content are sent.

The release preflight verifies every generated default-language and English tool page contains the required event layer and rejects known sensitive payload field names.

## Primary KPIs

- Tool start rate: `tool_started / tool_view`
- Tool completion rate: `tool_completed / tool_started`
- Result action rate: (`result_action` + `file_download`) / `tool_completed`
- Campaign-qualified use: tool starts and completions by UTM campaign and content
- Tool error rate: `tool_error / tool_started`
- Share rate: `share / views`
- Affiliate click-through rate: `affiliate_click / support page views`

## Google API access blocker

The service account can mint OAuth tokens but cannot enable Google Cloud services. A Google Cloud project owner must enable:

- Google Analytics Admin API (`analyticsadmin.googleapis.com`)
- Google Analytics Data API (`analyticsdata.googleapis.com`)
- Google Search Console API (`searchconsole.googleapis.com`)

After activation, grant the service account Viewer access to the GA4 property and Search Console property. Then record the numeric GA4 property ID in local, ignored analytics configuration rather than source control.

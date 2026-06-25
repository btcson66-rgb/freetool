# 每日流量報告排程設定

## 手動執行

```
cd D:\FreeTools
npm run traffic-report
```

## Windows Task Scheduler 排程（每日 07:00 Asia/Taipei）

### 自動註冊（以管理員身分執行 PowerShell）

```powershell
$action = New-ScheduledTaskAction `
  -Execute "node.exe" `
  -Argument "scripts/traffic-report/index.mjs" `
  -WorkingDirectory "D:\FreeTools"

$trigger = New-ScheduledTaskTrigger -Daily -At "07:00"

$settings = New-ScheduledTaskSettingsSet `
  -StartWhenAvailable `
  -DontStopOnIdleEnd `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries

Register-ScheduledTask `
  -TaskName "FreeTools-DailyTrafficReport" `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -Description "每日 07:00 執行 FreeTools 流量分析報告並發送 Discord 通知"
```

### 確認排程

```powershell
Get-ScheduledTask -TaskName "FreeTools-DailyTrafficReport"
```

### 手動觸發排程

```powershell
Start-ScheduledTask -TaskName "FreeTools-DailyTrafficReport"
```

### 移除排程

```powershell
Unregister-ScheduledTask -TaskName "FreeTools-DailyTrafficReport" -Confirm:$false
```

## 故障排除

- 檢查日誌：`logs/traffic-report/YYYY-MM-DD.log`
- Google API 失敗：確認 `api token/ga4-service-account.json` 有效
- Search Console 未授權：在 GSC 設定中加入 service account email
- Cloudflare 失敗：確認 `api token/cloudflare api.txt` 中的 token 未過期
- Discord 失敗：確認 `D:\notify-bot\.env` 中的 bot token 有效

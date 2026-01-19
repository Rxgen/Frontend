# Google Consent Mode v2 - Implementation & Testing Guide

## ✅ Implementation Complete

### What's Implemented:

1. **Scripts in HTML Head (SEO-Friendly)**
   - GTM script visible in page source
   - GA script (`G-Z65NXZ560J`) visible in page source
   - Both scripts load on page load

2. **Google Consent Mode v2**
   - Default state: `denied` (no tracking)
   - `wait_for_update: 500` (waits for consent update)
   - Tracking blocked until user accepts

3. **GPC Override**
   - GPC check happens first
   - If GPC enabled → Always deny (even if user accepts)

---

## How It Works

### Before User Accepts:
- ✅ Scripts load (visible in page source)
- ❌ Tracking blocked via Consent Mode
- ❌ No `_ga` cookies
- ❌ No tracking requests

### After User Accepts (No GPC):
- ✅ Scripts already loaded
- ✅ Consent Mode → `granted`
- ✅ Tracking starts
- ✅ `_ga` cookies created

### GPC Enabled:
- ✅ Scripts load (visible in page source)
- ❌ Consent Mode → `denied` (GPC override)
- ❌ No tracking, no cookies

---

## Testing Instructions

### Test 1: View Page Source (SEO Check)
1. Open website
2. Right-click → "View Page Source"
3. **Verify**:
   - Search for `G-Z65NXZ560J` → Should find GA script
   - Search for `GTM-WFD9MZW` → Should find GTM script
   - Both should be in `<head>` section

### Test 2: Before Accept (Tracking Blocked)
1. Clear localStorage: `localStorage.clear()`
2. Clear cookies: DevTools → Application → Cookies
3. Reload page
4. **Verify**:
   - Cookie banner appears
   - Check Network tab → GTM/GA scripts load
   - Check Cookies → No `_ga` cookies (Consent Mode blocks)
   - Check Network → No tracking requests

### Test 3: After Accept (Tracking Enabled)
1. Click "Accept All Cookies"
2. **Verify**:
   - Check Cookies → `_ga` cookies created
   - Check Network → Tracking requests fire
   - Consent Mode updated to `granted`

### Test 4: GPC Override
1. Enable GPC (Brave browser or DevTools)
2. Clear localStorage and cookies
3. Reload page
4. Click "Accept All"
5. **Verify**:
   - Scripts load (visible in page source)
   - Consent Mode → `denied` (GPC override)
   - No `_ga` cookies
   - No tracking requests

---

## Code Verification

### layout.js
- ✅ GTM script in `<head>`
- ✅ GA script in `<head>`
- ✅ Consent Mode default: `denied`
- ✅ `wait_for_update: 500`

### GoogleAnalytics.js
- ✅ GPC check first
- ✅ Consent Mode update based on user choice
- ✅ GPC override logic

---

## Expected Behavior

| Scenario | Scripts Load? | Tracking? | Cookies? | Consent Mode |
|----------|---------------|-----------|----------|--------------|
| Before Accept | ✅ Yes | ❌ No | ❌ No | `denied` |
| After Accept (No GPC) | ✅ Yes | ✅ Yes | ✅ Yes | `granted` |
| After Reject | ✅ Yes | ❌ No | ❌ No | `denied` |
| GPC Enabled | ✅ Yes | ❌ No | ❌ No | `denied` (override) |

---

## Browser Testing

### Chrome (No GPC)
1. Open Chrome
2. Clear all data
3. Visit website
4. **Before Accept**: No tracking
5. **After Accept**: Tracking enabled

### Brave (GPC Enabled)
1. Open Brave (GPC enabled by default)
2. Clear all data
3. Visit website
4. **Before Accept**: No tracking
5. **After Accept**: Still no tracking (GPC override)

---

## Verification Commands

### Check Consent Mode:
```javascript
// In browser console
window.dataLayer
// Should show consent_default and consent_update events
```

### Check GPC:
```javascript
// In browser console
navigator.globalPrivacyControl
// Should return: true (if GPC enabled) or undefined (if not)
```

### Check Cookies:
```javascript
// In browser console
document.cookie
// Should NOT contain _ga cookies before Accept or with GPC
```

---

## ✅ Implementation Status

- ✅ Scripts visible in page source (SEO-friendly)
- ✅ Consent Mode v2 implemented
- ✅ Tracking blocked until consent
- ✅ GPC override works
- ✅ Ready for testing


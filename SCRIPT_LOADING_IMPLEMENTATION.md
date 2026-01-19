# GTM/GA Script Loading Implementation

## ✅ Implementation Complete

### Key Changes

1. **Scripts Removed from HTML Head**
   - GTM and GA scripts are **NOT** in `layout.js` `<head>` anymore
   - Scripts only load **after** user accepts cookies
   - **No scripts load if user rejects or GPC is enabled**

2. **Dynamic Script Loading**
   - Scripts are injected via JavaScript only after consent
   - GPC check happens **before** loading scripts
   - If GPC is enabled, scripts **never load**

3. **GPC Override**
   - GPC check is the **first** check
   - If GPC detected → Scripts don't load at all
   - Even if user clicks "Accept All" with GPC, scripts won't load

---

## Flow Diagram

### Normal Flow (No GPC):
1. User visits → Cookie banner appears
2. **Before Accept**: No GTM/GA scripts loaded
3. User clicks "Accept All"
4. Scripts load dynamically
5. Tracking enabled

### GPC Flow:
1. User visits with GPC → Cookie banner appears with GPC message
2. **GPC detected**: Scripts **never load**
3. User clicks "Accept All" → Still no scripts (GPC override)
4. No tracking, no cookies

### Reject Flow:
1. User visits → Cookie banner appears
2. User clicks "Reject All"
3. Scripts **never load**
4. No tracking, no cookies

---

## Testing Checklist

### Test 1: No Scripts Before Consent
- [ ] Clear localStorage: `localStorage.clear()`
- [ ] Clear cookies
- [ ] Reload page
- [ ] **Verify**: View Page Source → No GTM/GA scripts in `<head>`
- [ ] **Verify**: DevTools → Network tab → No requests to `googletagmanager.com`
- [ ] **Verify**: DevTools → Application → Cookies → No `_ga` cookies

### Test 2: Scripts Load After Accept (No GPC)
- [ ] Click "Accept All Cookies"
- [ ] **Verify**: DevTools → Network tab → See GTM/GA requests
- [ ] **Verify**: DevTools → Application → Cookies → `_ga` cookies created
- [ ] **Verify**: Scripts are dynamically injected (check Elements tab)

### Test 3: GPC + Accept All (Scripts Don't Load)
- [ ] Enable GPC (Brave browser or DevTools)
- [ ] Clear localStorage and cookies
- [ ] Reload page
- [ ] **Verify**: GPC message appears in cookie banner
- [ ] Click "Accept All"
- [ ] **Verify**: Scripts **DO NOT** load (GPC override)
- [ ] **Verify**: No GTM/GA requests in Network tab
- [ ] **Verify**: No `_ga` cookies created

### Test 4: Reject All (Scripts Don't Load)
- [ ] Clear localStorage and cookies
- [ ] Reload page
- [ ] Click "Reject All Non-Essential Cookies"
- [ ] **Verify**: Scripts **DO NOT** load
- [ ] **Verify**: No GTM/GA requests
- [ ] **Verify**: No `_ga` cookies

---

## Code Changes

### `src/app/layout.js`
**Before:**
```html
<head>
  <script>/* GTM script */</script>
  <script>/* GA script */</script>
</head>
```

**After:**
```html
<head>
  {/* GTM and GA scripts are NOT loaded until user accepts cookies */}
  {/* They will be dynamically injected after consent is given */}
</head>
```

### `src/app/component/layout/GoogleAnalytics.js`
**New Logic:**
1. Check GPC first → If enabled, don't load scripts
2. Check user preferences → If analytics accepted, load scripts
3. Load scripts dynamically via JavaScript
4. Initialize with consent mode

---

## Verification Steps

### Manual Test in Browser:

1. **Before Accept (No Scripts)**:
   ```
   - Open DevTools → Network tab
   - Filter: "googletagmanager"
   - Reload page
   - Result: No requests should appear
   ```

2. **After Accept (Scripts Load)**:
   ```
   - Click "Accept All"
   - Check Network tab
   - Result: Should see GTM and GA requests
   - Check Cookies: Should see _ga cookies
   ```

3. **GPC Enabled (No Scripts)**:
   ```
   - Use Brave browser (GPC enabled)
   - Or set: navigator.globalPrivacyControl = true
   - Click "Accept All"
   - Check Network tab
   - Result: No GTM/GA requests (GPC override)
   - Check Cookies: No _ga cookies
   ```

---

## Key Points

✅ **Scripts NOT in HTML source** - Only load after consent
✅ **GPC blocks script loading** - Scripts never load if GPC enabled
✅ **No tracking before consent** - Scripts don't exist until accepted
✅ **GPC override works** - Even Accept All won't load scripts with GPC


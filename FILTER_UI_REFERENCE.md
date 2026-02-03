# Segmented Control Filter UI Reference

## Visual Layout Guide

### Main Listing Page Header

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Restaurant Count] restaurants                                      │
│  delivering to your location                                         │
│                                                                       │
│  Type:     [Veg] [All] [Non-Veg]        Sort: [Fastest] [Rating]   │
│  Rating:   [All] [4.0+] [4.5+]                [Price ↑] [Price ↓]  │
│  Delivery: [All] [Low]                                               │
└─────────────────────────────────────────────────────────────────────┘
```

### Restaurant Details Page (Sticky Controls)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [← Back to Restaurants]                                             │
│                                                                       │
│  [Restaurant Cover Image]                                            │
│                                                                       │
│  Restaurant Name                                                     │
│  ⭐ Rating  | 🕒 Time  | 💰 Price                                    │
├─────────────────────────────────────────────────────────────────────┤
│  [All (20)] [Appetizers (5)] [Mains (8)] [Desserts (4)] [Drinks]   │ ← Sticky Tabs
├─────────────────────────────────────────────────────────────────────┤
│  Type: [Veg] [All] [Non-Veg]  |  Sort: [Fastest] [Rating] [↑] [↓]  │ ← Sticky Filters
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  [Menu Items Grid...]                                                │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Filter Behaviors

### Main Page Filters

#### Type Filter (Veg/All/Non-Veg)
- **Veg**: Shows only vegetarian restaurants
- **All**: Shows all restaurants (default)
- **Non-Veg**: Shows only non-vegetarian restaurants
- **State**: `filters.vegFilter`
- **Location**: Top right, above Sort control

#### Rating Filter
- **All**: No rating filter (default)
- **4.0+**: Restaurants with 4.0+ stars
- **4.5+**: Restaurants with 4.5+ stars
- **State**: `filters.ratingFilter`
- **Location**: Middle row, next to Type filter

#### Delivery Filter
- **All**: No delivery fee filter (default)
- **Low**: Low delivery fee restaurants only
- **State**: `filters.deliveryFeeFilter`
- **Location**: Bottom row of filters

### Details Page Filter

#### Type Filter (Veg/All/Non-Veg)
- **Veg**: Shows only vegetarian menu items
- **All**: Shows all menu items (default)
- **Non-Veg**: Shows only non-vegetarian items
- **State**: `vegFilter`
- **Behavior**: Filters items without resetting expanded/collapsed sections
- **Location**: Sticky bar below category tabs, left side

## Responsive Behavior

### Desktop (> 768px)
```
Type: [Veg][All][Non-Veg]  Rating: [All][4.0+][4.5+]  Delivery: [All][Low]
Sort: [Fastest][Rating][Price ↑][Price ↓]
```

### Mobile (≤ 768px)
```
Type:
[Veg] [All] [Non-Veg]

Rating:
[All] [4.0+] [4.5+]

Delivery:
[All] [Low]

Sort:
[Fastest] [Rating] [Price ↑] [Price ↓]
```

## Interaction States

### Default State
- Background: Light gray (`var(--bg-light)`)
- Text: Secondary color (`var(--text-secondary)`)
- Border: Subtle shadow

### Selected State
- Background: Orange pill (`var(--swiggy-orange)`)
- Text: White (`var(--text-white)`)
- Shadow: Orange glow
- Font: Semibold

### Hover State (Non-selected)
- Text: Primary color (`var(--text-primary)`)
- Background: Unchanged
- Cursor: Pointer

### Focus State (Keyboard)
- Outline: 2px orange ring
- Offset: 2px
- Fully accessible via keyboard

## Keyboard Navigation

### Arrow Keys
- **Left Arrow**: Move to previous option
- **Right Arrow**: Move to next option
- **Wraps**: Yes (loops around)

### Special Keys
- **Home**: Jump to first option
- **End**: Jump to last option
- **Tab**: Move to next control
- **Shift+Tab**: Move to previous control

## Accessibility Features

### ARIA Roles
- Container: `role="radiogroup"`
- Options: `role="radio"`
- Labels: `aria-label` for each control
- State: `aria-checked` for selected option

### Screen Reader
- Announces control type (e.g., "Filter by food type")
- Announces option (e.g., "Veg, radio button")
- Announces state (e.g., "checked" or "not checked")
- Announces count updates dynamically

### Motion Preferences
- Respects `prefers-reduced-motion`
- Disables animations if user prefers reduced motion
- Instant transitions instead of smooth animations

## Integration Points

### Existing Filters
- **Compatible with**: Filter sidebar, filter chips
- **Does not conflict**: All filters work together
- **State management**: Centralized in App.js

### Sorting
- **Works alongside**: All filter combinations
- **Applied after**: Filtering is complete
- **Independent**: Can be changed without affecting filters

### URL State (Future)
- Ready for: Query parameter persistence
- Format: `?vegFilter=veg&ratingFilter=4.5+&sort=rating`

## CSS Classes Reference

### Main Selectors
- `.section-header-controls` - Container for all controls
- `.section-header-filters` - Filter controls wrapper
- `.filter-control-group` - Individual filter group
- `.filter-control-label` - Filter label text
- `.section-header-sort` - Sort control wrapper

### Details Page Selectors
- `.sort-control-container` - Sticky container
- `.sort-control-wrapper` - Inner wrapper
- `.filter-control-group-details` - Filter group
- `.sort-control-group-details` - Sort group
- `.sort-control-divider` - Visual separator

### Component Selectors
- `.segmented-control-container` - Control wrapper
- `.segmented-control-thumb` - Animated pill/indicator
- `.segmented-control-option` - Individual button
- `.segmented-control-label` - Button text

## Performance Notes

- **Rendering**: Efficient React state updates
- **Animations**: GPU-accelerated CSS transitions
- **Filtering**: O(n) complexity, runs on each render
- **Throttling**: Not needed for current data size
- **Memory**: Minimal overhead, no memoization needed

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 10+)

## Testing Checklist

- [ ] All filter combinations work correctly
- [ ] Filters apply immediately on selection
- [ ] Restaurant count updates dynamically
- [ ] Veg filter on details page doesn't reset sections
- [ ] Sticky behavior works on scroll
- [ ] Keyboard navigation functions properly
- [ ] Screen reader announces changes
- [ ] Mobile layout stacks correctly
- [ ] Animations respect reduced motion
- [ ] Focus indicators visible
- [ ] Touch targets are adequate (44px min)
- [ ] Works with existing sidebar filters
- [ ] No console errors or warnings

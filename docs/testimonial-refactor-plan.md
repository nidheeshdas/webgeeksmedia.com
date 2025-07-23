# Testimonial Section Refactor Plan

This document outlines the steps to refactor the `TestimonialSection` component to match the Figma design specifications.

### 1. Restructure Component Layout

- **Goal:** Correct the main layout to match the Figma design.
- **Actions:**
    - Modify the root `div` of the `TestimonialSection` to be a flex container.
    - Create two main child `div`s to represent the left and right columns.
    - The left column will contain the "Why Clients Love Us" title, description, and the testimonial card.
    - The right column will contain the list of "Why Us" feature points.
    - Ensure the columns are correctly ordered and have the appropriate spacing between them as per the Figma design (`justify-between`).

### 2. Rebuild the Left Column (Testimonial)

- **Goal:** Implement the left side of the section with the correct content and styling.
- **Actions:**
    - Add the main title "Why Clients Love Us" with the correct typography (`48px`, `Satoshi Variable Black`).
    - Add the descriptive paragraph below the title with the correct typography (`18px`, `Satoshi Variable Medium`, `line-height: 28px`, `gray-600`).
    - Create a new `TestimonialCard` component.
        - This component will use the `Union.svg` as a background to create the speech bubble effect.
        - The testimonial text will be placed inside this bubble with the correct styling (`17px`, `Satoshi Variable Medium`, `#868686`).
    - Below the speech bubble, add the author's information:
        - Use the `Sanjay-Photo.png` for the author's image.
        - Add the author's name ("Sanjay Bhatgaonkar") and role ("Founder of Ecstasee") with the specified typography.
        - Update the `StarRating` component to use the `star-icon.svg` from Figma and ensure the color matches `rgba(255, 199, 40, 1)`.

### 3. Rebuild the Right Column (Why Us Features)

- **Goal:** Implement the list of feature points on the right side.
- **Actions:**
    - Create a new `FeaturePoint` component that takes an icon, title, and description as props.
    - The `FeaturePoint` component will have:
        - A container for the icon with a `bg-green-400` background.
        - A title with `24px`, `Satoshi Bold` typography.
        - A description with `17px`, `Satoshi Regular` typography.
    - Use this `FeaturePoint` component to render the five feature points from the Figma design, passing the correct data for each.
    - Ensure the spacing between feature points (`47px`) and within each point is correct.

### 4. Apply Global Styles and Final Touches

- **Goal:** Ensure all styling matches the Figma design.
- **Actions:**
    - Update the section's background to use the correct linear gradient: `linear-gradient(148.716deg, rgb(255, 248, 227) 0%, rgb(239, 246, 255) 100%)`.
    - Set the section padding to `py-20` and `px-[120px]`.
    - Verify all font families are correctly set to `Satoshi`.
    - Remove any unused or incorrect styling from the old implementation.

### 5. Plan for Responsiveness

- **Goal:** Define a responsive strategy for smaller screens.
- **Actions:**
    - **Tablet:** The two-column layout should be maintained, but with reduced padding and font sizes.
    - **Mobile:** The layout should stack to a single column. The "Why Us" section should appear below the testimonial section. All text and spacing should be scaled down appropriately.

This plan will be used to guide the implementation in the next phase.
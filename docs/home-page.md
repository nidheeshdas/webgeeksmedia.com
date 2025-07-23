# Webpage Documentation

This document provides a detailed overview of the component structure and implementation of the new webpage.

## 1. Component Breakdown

The webpage is broken down into the following components:

### Reusable Components

*   **Button:** A versatile button component for actions.
*   **Logo:** The website's logo.
*   **Navigation:** The main navigation bar.
*   **Icon:** A generic icon component.
*   **ServiceCard:** A card to display a core service.
    *   **Props:** `icon`, `title`, `description`, `badge`.
*   **Feature:** A component to highlight a specific feature or benefit.
    *   **Props:** `icon`, `title`, `description`.

### Page-Level Components

*   **Header:** The top section of the page, containing the logo and navigation.
*   **HeroSection:** The main introductory section with the headline and sub-headline.
*   **Services:** A section to display the core services offered, using multiple `ServiceCard` components.
*   **WhyUs:** A section explaining the company's value proposition, combining a testimonial with `Feature` components.
*   **Cta:** A final, prominent call-to-action section.
*   **Footer:** The bottom section of the page with copyright information and social media links.

## 2. File Structure

All new components are located in the `app/components` directory, following this structure:

```
app/components/
├── Button/
│   └── Button.tsx
├── Card/
│   └── Card.tsx
├── Cta/
│   └── Cta.tsx
├── Feature/
│   └── Feature.tsx
├── FeaturesSection/
│   └── FeaturesSection.tsx
├── Footer/
│   └── Footer.tsx
├── Header/
│   └── Header.tsx
├── HeroSection/
│   └── HeroSection.tsx
├── Icon/
│   └── Icon.tsx
├── Logo/
│   └── Logo.tsx
├── Navigation/
│   └── Navigation.tsx
├── StarRating/
│   └── StarRating.tsx
├── TestimonialSection/
│   └── TestimonialSection.tsx
└── WhyUs/
    └── WhyUs.tsx
```

## 3. Implementation Summary

The project was implemented by following these steps:

1.  **Project Structure Setup:** All directories and files for the components were created.
2.  **Reusable Component Implementation:** Core components like `Button`, `Icon`, `ServiceCard`, and `Feature` were developed to be versatile and reusable.
3.  **Page-Level Component Implementation:** Page-specific components, including `Header`, `HeroSection`, `Services`, `WhyUs`, `Cta`, and `Footer`, were built by composing reusable components.
4.  **Page Assembly:** The main page was constructed by integrating all page-level components into the `app/routes/home.tsx` file.
5.  **Styling:** All components were styled using Tailwind CSS to ensure a consistent and modern design based on the specifications in `docs/home-structure.md`.
6.  **Final Review:** The completed page was reviewed to confirm that it is fully responsive and aligns with the design specifications.

## 4. Component Structure

The main page, located at `app/routes/home.tsx`, is constructed by assembling the following components in order:

*   **`Header`**: The main navigation bar at the top of the page.
*   **`HeroSection`**: The introductory section that grabs the user's attention.
*   **`Services`**: Displays the core services offered.
*   **`WhyUs`**: Highlights key benefits and includes a customer testimonial.
*   **`Cta`**: The final call-to-action to encourage user engagement.
*   **`Footer`**: The main footer at the bottom of the page.

import type {Config} from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        fontSize: {
            'brand-custom': [
                '3rem', {
                    lineHeight: '56px',
                    letterSpacing: '0em',
                    fontWeight: '700',
                }
            ],
            'brand-custom-mobile': [
                '24px', {
                    lineHeight: '32px',
                    letterSpacing: '0em',
                    fontWeight: '700',
                }
            ],
            'brand-title-3': [
                '1rem', {
                    lineHeight: '1.5rem',
                    letterSpacing: '0em',
                    fontWeight: '500',
                }
            ],
            'brand-heading-1': [
                '6rem', {
                    lineHeight: '112px',
                    letterSpacing: '0em',
                    fontWeight: '300',
                }
            ],
            'brand-heading-2': [
                '3.75rem', {
                    lineHeight: '72px',
                    letterSpacing: '0em',
                    fontWeight: '300',
                }
            ],
            'brand-heading-3': [
                '3rem', {
                    lineHeight: '56px',
                    letterSpacing: '0em',
                    fontWeight: '400',
                }
            ],
            'brand-heading-4': [
                '34px', {
                    lineHeight: '36px',
                    letterSpacing: '0em',
                    fontWeight: '400',
                }
            ],
            'brand-heading-5': [
                '1.5rem', {
                    lineHeight: '32px',
                    letterSpacing: '0em',
                    fontWeight: '400',
                }
            ],
            'brand-heading-6': [
                '1.25rem', {
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    fontWeight: '600',
                }
            ],
            'brand-subtitle-1': [
                '1rem', {
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    fontWeight: '400',
                }
            ],
            'brand-subtitle-2': [
                '0.875rem', {
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    fontWeight: '500',
                }
            ],
            'brand-body-1': [
                '1rem', {
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    fontWeight: '400',
                }
            ],
            'brand-body-2': [
                '0.875rem', {
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    fontWeight: '400',
                }
            ],
            'brand-button': [
                '0.875rem', {
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    fontWeight: '600',
                }
            ],
            'brand-caption': [
                '0.75rem', {
                    lineHeight: '16px',
                    letterSpacing: '0em',
                    fontWeight: '400',
                }
            ],
            'brand-overline': [
                '0.75rem', {
                    lineHeight: '32px',
                    letterSpacing: '0em',
                    fontWeight: '400',
                }
            ],
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                activity: {
                    low: 'var(--user-activity-low)',
                    mid: 'var(--user-activity-mid)',
                    high: 'var(--user-activity-high)',
                    overheat: 'var(--user-activity-overheat)',
                },
                brand: {
                    bg: {
                        primary: 'var(--brand-bg-primary)',
                        secondary: 'var(--brand-bg-secondary)',
                        tertiary: 'var(--brand-bg-tertiary)',
                        modal: 'var(--brand-bg-modal)',
                        accent: 'var(--brand-bg-accent)',
                        success: 'var(--brand-bg-success)',
                        error: 'var(--brand-bg-error)',
                    },
                    text: {
                        primary: 'var(--brand-primary)',
                        secondary: 'var(--brand-secondary)',
                        tertiary: 'var(--brand-tertiary)',
                        accent: 'var(--brand-accent)',
                        success: 'var(--brand-success)',
                        error: 'var(--brand-error)',
                    },
                    icons: {
                        primary: 'var(--brand-icons-primary)',
                        secondary: 'var(--brand-icons-secondary)',
                        tertiary: 'var(--brand-icons-tertiary)',
                        accent: 'var(--brand-icons-accent)',
                        success: 'var(--brand-icons-success)',
                        error: 'var(--brand-icons-error)',
                    },
                    border: {
                        primary: 'var(--brand-border-primary)',
                        accent: 'var(--brand-border-accent)',
                        success: 'var(--brand-border-success)',
                        error: 'var(--brand-border-error)',
                    },
                    state: {
                        accent_disabled: 'var(--brand-state-accent-disabled)',
                        blue_hover: 'var(--brand-state-blue-hover)',
                        blue_focused: 'var(--brand-state-blue-focused)',
                        blue_focused_transparent_first: 'var(--brand-state-blue-focused-transparent-first)',
                        blue_focused_transparent_second: 'var(--brand-state-blue-focused-transparent-second)',
                        error_hover: 'var(--brand-state-error-hover)',
                        error_focused: 'var(--brand-state-error-focused)',
                        error_focused_transparent_first: 'var(--brand-state-error-focused-transparent-first)',
                        error_focused_transparent_second: 'var(--brand-state-error-focused-transparent-second)',
                        success_hover: 'var(--brand-state-success-hover)',
                        success_focused: 'var(--brand-state-success-focused)',
                        success_focused_transparent_first: 'var(--brand-state-success-focused-transparent-first)',
                        success_focused_transparent_second: 'var(--brand-state-success-focused-transparent-second)',
                        contrast_hover: 'var(--brand-state-contrast-hover)',
                        contrast_focused: 'var(--brand-state-contrast-focused)',
                    },
                    brand: {
                        blue: 'var(--brand-brand-blue)',
                        dark_blue: 'var(--brand-brand-dark-blue)',
                        orange: 'var(--brand-brand-orange)',
                        white: 'var(--brand-brand-white)',
                        black: 'var(--brand-brand-black)',
                    }
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require('@tailwindcss/aspect-ratio'),
    ],
} satisfies Config

export default config
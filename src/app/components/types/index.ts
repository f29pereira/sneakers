/**
 * Props for the MobileNav component
 * @property handleToggle  - state (isMobileNavOpen) setter function
 */
export type MobileNavProps = {
  handleToggle: React.MouseEventHandler;
};

/**
 * Props for the Arrow component
 * @property direction - arrow direction
 */
export type ArrowProps = {
  direction: "left" | "right";
};

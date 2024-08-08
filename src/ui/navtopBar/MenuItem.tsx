import clsx from "clsx";

interface MenuItemProps {
  open: boolean;
  children: React.ReactNode;
}
function MenuItem({ open, children }: MenuItemProps) {
  return (
    <>
      {open && (
        <div
          className={clsx(
            "flex-1  overflow-hidden text-start relative left-2 text-nowrap"
          )}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default MenuItem;

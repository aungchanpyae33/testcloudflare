function OverLay({
  setopen,
}: {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setopen(false)}
      className="z-40 bg-overlay absolute top-0 left-0 bottom-0 right-0"
    ></div>
  );
}

export default OverLay;

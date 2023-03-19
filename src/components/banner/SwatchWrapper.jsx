import SingleSwatch from "./SingleSwatch";

const SwatchWrapper = ({ activeData, swatchData, handleSwatchClick }) => {
  const handleSwatch = (id) => {
    handleSwatchClick(id);
  };

  return (
    <div className="absolute bottom-0 z-20 mb-2 flex h-fit w-full justify-center gap-8  lg:inset-y-[40%] lg:right-20 lg:w-fit lg:flex-col">
      {swatchData.map((swatch) => (
        <SingleSwatch
          key={swatch.id}
          item={swatch}
          handleSwatch={handleSwatch}
          activeID={activeData.id}
        />
      ))}
    </div>
  );
};

export default SwatchWrapper;

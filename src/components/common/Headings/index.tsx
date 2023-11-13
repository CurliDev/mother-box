
const AccentHeader = (props: any) => {
  const { text } = props;

  return (
    <div className="flex items-center ml-8 py-4 gap-x-3  justify-between mr-3">
      <div className="flex items-center gap-x-3">
        <p className="text-lilacPurple text-optima uppercase text-title-xxl flex flex-col items-stretch justify-start bg-transparent">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AccentHeader;

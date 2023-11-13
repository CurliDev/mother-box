const InfoBar = ({ children }: any) => {
  return (
    <div className="flex items-center ml-8 py-4 gap-x-3 justify-between mr-3 text-black dark:text-white">
      {children}
    </div>
  );
};

export default InfoBar;

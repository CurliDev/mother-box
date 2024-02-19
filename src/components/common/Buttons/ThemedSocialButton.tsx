const ThemedSocialButton = ({
  text,
  onClick,
  icon,
}: {
  text: string;
  onClick: any;
  icon: any;
}) => {
  const baseClasses =
    "px-8 py-2 rounded-[8px] focus:outline-lilacPurple focus:ring transition ease-in-out duration-300 flex items-center justify-center";
  const standardClasses =
    "bg-white text-black border-2 border-lightgray hover:bg-gray-100 ";

  const buttonClasses = `${baseClasses} ${standardClasses}`;

  console.log(icon);
  return (
    <button onClick={onClick} className={buttonClasses}>
      <img src={icon.src} alt="" className="h-10 w-10 mr-2" /> <p>{text}</p>
    </button>
  );
};

export default ThemedSocialButton;

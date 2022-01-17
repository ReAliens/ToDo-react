import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="flex justify-between items-center h-[80px] w-full px-4">
      <span className="text-3xl">Today's To Do</span>
      <FontAwesomeIcon
        icon={faRedoAlt}
        className="text-3xl cursor-pointer"
        onClick={() => handleRefresh()}
      />
    </div>
  );
};

export default Header;

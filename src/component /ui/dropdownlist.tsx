type DropdownListProps = {
    listdata: string[];
  };
  
  const DropdownList = ({ listdata }: DropdownListProps) => {
    return (
      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
        {listdata.map((collection, index) => (
          <a
            key={index}
            href="#"
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-colors"
          >
            {collection}
          </a>
        ))}
      </div>
    );
  };
  
  export default DropdownList;
  
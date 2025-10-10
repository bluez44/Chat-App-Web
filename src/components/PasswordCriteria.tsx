const PasswordCriteria = ({ password = "" }) => {
  const criteria = [
    { name: "At least 8 characters", pattern: /.{8,}/ },
    { name: "At least 1 uppercase letter", pattern: /[A-Z]/ },
    { name: "At least 1 lowercase letter", pattern: /[a-z]/ },
    { name: "At least 1 number", pattern: /[0-9]/ },
    { name: "At least 1 special character", pattern: /[^A-Za-z0-9]/ },
  ];

  return (
    <div className="mt-2 text-sm text-gray-500">
      <ul className="list-inside list-disc">
        {criteria.map((item) => (
          <li
            key={item.name}
            className={
              item.pattern.test(password) ? "text-green-500" : "text-slate-400"
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordCriteria;
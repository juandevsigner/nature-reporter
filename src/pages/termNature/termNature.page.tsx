import { useContext, useEffect } from "react";
import { AppContext } from "src/context/app.context";

const TermNaturePage = () => {
  const { setOpenMenu } = useContext(AppContext);

  useEffect(() => {
    setOpenMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>TermNaturePage</div>;
};

export default TermNaturePage;

import Title from "./Title";
import Country from "./Country";
import ContractType from "./ContractType";
import City from "./City";

const Content = (props) => {
  return (
    <div className="job">
      <Title name={props.title} />
      <div className="infos">
        <ContractType text={props.contractType} />
        <Country text={props.country} />
        <City text={props.city} />
      </div>
    </div>
  );
};

export default Content;

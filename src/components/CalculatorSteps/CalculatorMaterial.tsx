import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMaterialAction } from "../../store/calculator/action";
import { getBuildType } from "../../store/calculator/selectors";
import { BuildsEnum, CalculatorActions, MaterialEnum } from "../../store/calculator/types";
import { Button } from "../Button/Button";
import { CalculatorBox } from "../CalculatorWrappers/CalculatorBox";
import { CalculatorButtons } from "../CalculatorWrappers/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorWrappers/CalculatorWrapper";
import { CancelButton } from "../CancelButton/CancelButton";
import { LinkButton } from "../LinkButton/LinkButton";

const houseLinks = [
  {
    name: "Кирпич",
    value: MaterialEnum.BRICK,
  },
  {
    name: "Шлакоблок",
    value: MaterialEnum.CINDER_BLOCK,
  },
  {
    name: "Деревянный брус",
    value: MaterialEnum.WOODEN_BEAM,
  },
];

const garageLinks = [
  {
    name: "Шлакоблок",
    value: MaterialEnum.CINDER_BLOCK,
  },
  {
    name: "Металл",
    value: MaterialEnum.METAL,
  },
  {
    name: "Cендвич-панели",
    value: MaterialEnum.SANDWICH_PANEL,
  },
];

const CalculatorMaterial: React.FC = () => {
  const buildType = useSelector(getBuildType);
  const dispatch = useDispatch<Dispatch<CalculatorActions>>();
  const links = buildType === BuildsEnum.GARAGE ? garageLinks : houseLinks;

  return (
    <CalculatorWrapper>
      <CalculatorBox title="Материал стен:" align="left">
        {links.map((link) => (
          <LinkButton key={link.name} onClick={() => dispatch(setMaterialAction(link.value))}>
            {link.name}
          </LinkButton>
        ))}
      </CalculatorBox>
      <CalculatorButtons>
        <CancelButton>Отмена</CancelButton>
        <Button onClick={() => dispatch(setMaterialAction(links[0].value))}>Далее</Button>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorMaterial };

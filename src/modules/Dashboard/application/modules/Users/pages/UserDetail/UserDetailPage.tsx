import { User } from "modules/Dashboard/domain/entity/User";
import { useParams } from "react-router-dom";
import { Flex } from "shared";
import SectionPersonalInformation from "../../components/UserDetail/Section/SectionPersonalInformation";
import SectionAccountInformation from "../../components/UserDetail/Section/SectionAccountInformation";
import useGetUserByDni from "../../hooks/useGetUserByDni";
import "./index.scss";
import Header from "../../components/UserDetail/Header/Header";
import { useState } from "react";
import { UserSectionEnum } from "../../enum/UserSectionEnum";

export default function UserDetailPage() {
  const { dni } = useParams<{ dni: string }>();
  const { isLoading, data } = useGetUserByDni(dni);
  const [currentSection, setCurrentSection] = useState<UserSectionEnum>(
    UserSectionEnum.PersonalInformation
  );

  const menuOptions = [
    {
      label: "Información personal",
      className:
        currentSection === UserSectionEnum.PersonalInformation
          ? "active"
          : "inactive",
      onClick: () => setCurrentSection(UserSectionEnum.PersonalInformation),
    },
    {
      label: "Cuenta",
      className:
        currentSection === UserSectionEnum.AccountInformation
          ? "active"
          : "inactive",
      onClick: () => setCurrentSection(UserSectionEnum.AccountInformation),
    },
  ];

  const user: User = data || ({} as User);
  
  if (isLoading) return <p>Cargando...</p>;
  
  return (
    <div className="user-detail-container">
      <Header user={user} />
      <Flex
        margin="48px 0 24px 0"
        width="100%"
        alignItems="center"
        className="nav-link-container"
      >
        {menuOptions.map((e, i) => (
          <p className={e.className} onClick={e.onClick} key={i}>
            {e.label}
          </p>
        ))}
      </Flex>
      {currentSection === UserSectionEnum.PersonalInformation && (
        <SectionPersonalInformation user={user} />
      )}
      {currentSection === UserSectionEnum.AccountInformation && (
        <SectionAccountInformation account={user.account} />
      )}
    </div>
  );
}

import { Button, Flex, Select, Typography } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import useLanguage from "../hooks/useLanguage";
import { EnvironmentOutlined } from "@ant-design/icons"
const { Text } = Typography;

const HeaderTop = () => {

    const { language, setLanguage } = useContext(LanguageContext);
    const translate = useLanguage()

    
    const handlyChange = (value) => {
        localStorage.setItem("language",value);
        setLanguage(value);
    }


    return <Flex justify="space-between" align="center" className="header-top">
        <Flex align="center" gap="20px" className="header-top__location">
            <Button>0% {translate("plan")}</Button>
            <Flex align="center" gap="10px">
                <div>
                    {translate("punkt")}
                </div> 
                <Link><Text className="location"><EnvironmentOutlined/>{translate("location")}</Text></Link>
            </Flex>
        </Flex>
        <Flex gap="large" align="center" className="header-top__question">
            <Link className="header-top__link" >{translate("question")}</Link>
            <Button>{translate("call")}</Button>
            <div className="select">
                <Select
                   defaultValue={language}
                   className="header-top__select"
                   onChange={handlyChange}
                   options={[
                    {
                        value:"uz",label:"UZ"
                    },
                    {
                        value:"ru",label:"RU"
                    }
                ]}
                  />
                   
            </div>
        </Flex>
    </Flex>
}

export default HeaderTop;

import AppNavBar from './Navbar'
import {useTranslation} from "react-i18next"

function RODO(){
    const {t} = useTranslation()
    return(
        <>
        <AppNavBar/>
        <div style={{color:"black", marginLeft:"3%", minHeight:"100vh"}}>
        <h1 style={{textAlign:"center", paddingTop:"1%"}}>{t("GDPR")}</h1>
         <h5>{t("GDPR - Information obligation")}</h5>
         <p >{t("Ladies and Gentlemen,")} <br></br>
         {t("below some important information regarding the principles of safe processing of your personal data by our company. Due to the changes resulting from the GDPR, please read the information clause below :")}</p>

         <h5>{t("INFORMATION CLAUSE")}</h5>
         <p >{t("From May 25, 2018, Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of individuals, regarding the processing of personal data and their free movement entered into force. In connection with the above, we would like to inform you that the administrator of your personal data is ...... based in ........... Your personal data is processed in accordance with Art. 6 of the Regulation, section 1, point b, c and f (with reference to this point): To execute a purchase or sale order and are kept for a period of 6 years from the moment when the operations, purchase or sale transactions have been finally completed and the obligations have been paid, settled or expired, and until the end of all guarantees and warranties for the performance of the contract or order. Providing your personal data is voluntary, but failure to do so will make it impossible to perform the contract or order. We provide your personal data only to the extent necessary to implement your orders to entities providing postal, courier, accounting, legal and IT services with whom we cooperate.")}</p><br></br>
         <p >{t("You have the right to:")}</p>
        <ul>
            <li >{t("access to the content of your data,")}</li>
            <li >{t("rectification, deletion or limitation of data processing,")}</li>
            <li >{t("data portability,")}</li>
            <li >{t("raise an objection,")}</li>
            <li >{t("withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.")}</li>
        </ul>
        <p >{t("In addition, you have the right to lodge a complaint with the President of the Office for Personal Data Protection if you believe that the processing of personal data violates the provisions of the Regulation.")}</p>
        <p >{t("Detailed information on the personal data we process can be found in our Privacy Policy")}
</p>
        <p>{t("If you have any questions, please contact us: ............")}

</p>
        </div>
         
        </>
    )
}

export default RODO
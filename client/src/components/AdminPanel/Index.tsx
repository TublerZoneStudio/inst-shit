import { FC, useEffect, useState } from "react"
import { IContent } from "../../models/IContent"
import UserService from "../../services/UserService"

interface AdminPanelProps {
    admin_psw: string
}

const AdminPanel: FC<AdminPanelProps> = ({admin_psw}) => {

    const [content, setContent] = useState<IContent[]>([])

    const [loading, setLoading] = useState<boolean>(false)

    const getContent = async () => {
        setLoading(true) 

        try {
            let content = await UserService.getContent(admin_psw)

            setContent(content.data)
        } catch(e) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getContent()
    }, [])

    return (
        <div className="comparison_container">
            {
                loading 
                    ?
                    "Загрузка..."
                    :
                    <div className="comparison">
                        <table>
                            <thead>
                                <tr>
                                    <th className="price-info">
                                        Номер
                                    </th>
                                    <th className="price-info">
                                        Контактная инф.
                                    </th>
                                    <th className="price-info">
                                        Пароль
                                    </th>
                                    <th className="price-info">
                                        IP Адрес
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    content.map((i, index) => 
                                        <tr className="compare-row" key={i._id}>
                                            <td>
                                                {index}
                                            </td>
                                            <td>
                                                {i.contact}
                                            </td>
                                            <td>
                                                {i.password}
                                            </td>
                                            <td>
                                                {i.ip_address}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default AdminPanel
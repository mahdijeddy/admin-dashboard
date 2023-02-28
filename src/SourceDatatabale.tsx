import { generateUsers } from "./generateUsers";
interface User {
    id?: string;
    username?: string;
    img?: string;
    status?: string;
    email?: string;
    age?: number;
}

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params: any) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params: any) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        },
    },
];
export const userRows = () => {
    let users: User[] = [];

    generateUsers(12).map((user) =>
        users.push({
            id: user._id,
            username: user.email,
            img: user.avatar,
            status: user.statusUser,
            email: user.email,
            age: 35,
        })
    );
    return users;
};

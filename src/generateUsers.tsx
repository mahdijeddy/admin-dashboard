import { faker } from "@faker-js/faker";
import type { SexType } from "@faker-js/faker";
// User interface for types
export interface Users {
    _id?: string;
    avatar?: string;
    email?: string;
    customer?: string;
    lastName?: string;
    sex?: SexType;
    product?: string;
    Date?: string;
    amount?: number;
    status?: string;
    statusUser?: string;
}
// id: 1143155,
//       product: "Acer Nitro 5",
//       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 785,
//       method: "Cash on Delivery",
//       status: "Approved",

// generate users by numbers given
export function generateUsers(num: number = 1) {
    let users: Users[] = [];

    for (let i = 1; i <= num; i++) {
        let product = faker.commerce.product();
        let _id = faker.datatype.uuid();
        let Date = faker.date.past().toString();
        let customer = faker.name.firstName();
        let email = faker.internet.email();
        let lastName = faker.name.lastName();
        let avatar = faker.image.avatar();
        let sex = faker.name.sexType();
        let amount = Math.round(Math.random() * 100);
        let status = amount % 2 === 0 ? "Approved" : "Pending";
        let statusUser = amount % 2 === 0 ? "active" : "passive";

        users.push({
            _id,
            avatar,
            email,
            amount,
            statusUser,
            status,
            customer,
            lastName,
            sex,
            Date,
            product,
        });
    }

    return users;
}

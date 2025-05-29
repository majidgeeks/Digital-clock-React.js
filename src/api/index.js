import Chance from "chance";

const chance = Chance();

export const fakeUserData = () => {
    console.log("chance.name",chance.name({ middle: true }));
    const user = {
        name: chance.name({full: true}),
        id: chance.unique(chance.integer, 1, {min: 0, max: 100})[0],
        email: chance.email(),
        phone: chance.phone()
    }
    return user;
};



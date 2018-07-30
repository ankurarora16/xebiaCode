const initialState = {
    authentication: {

    },
    header: {
        session : {
            isValid : false,
            userName : "",
            name : ""
        }
    },
    planets: {
        planets: {
            value: [],
            active: true
        }
    }
};

export default function getInitialState() {
    return initialState;
}
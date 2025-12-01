interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface User {
  username: string;
  password: string;
}

interface AuthenticatedUser {
  username: string;
  token: string;
}

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  title: string;
  image: string;
  volume: string;
  price: string;
}

interface PizzeriaContext {
  pizzas: Pizza[];
  setPizzas: (pizzas: Pizza[]) => void;
  actionToBePerformed: boolean;
  setActionToBePerformed: (actionToBePerformed: boolean) => void;
  clearActionToBePerformed: () => void;
  drinks: Drink[];
  addPizza: (newPizza: NewPizza) => void;
    registerUser: (newUser: User) => Promise<void>;
    loginUser:(user:User)=> Promise<void>;
}

export type { Pizza, NewPizza, Drink,PizzeriaContext, AuthenticatedUser,
  MaybeAuthenticatedUser, User};

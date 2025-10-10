interface loginFormModel {
  userName: string;
  password: string;
}

interface registerFormModel extends loginFormModel {
  confirmPassword: string;
  fullName: string;
  birthday: string;
  address: string;
}

export type { loginFormModel, registerFormModel };

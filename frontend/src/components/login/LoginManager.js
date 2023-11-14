const LoginManager = {
  async login(username, password) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const user = await response.json();
      return user;
    } else {
      return null;
    }
  },
};

export default LoginManager;


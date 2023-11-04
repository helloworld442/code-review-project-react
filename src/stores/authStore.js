import { emailCheck, emailSend, loginUser, registerUser } from "../api/auth";

export default class AuthStore {
  snapshot = {};

  listeners = new Set();

  addEventListener(listener) {
    this.listeners.add(listener);
  }

  removeEventListener(listener) {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  getSnapshot() {
    return this.snapshot;
  }

  async postFetchEmail(e, form) {
    e.preventDefault();

    const emailForm = { email: form.email };

    try {
      const data = await emailSend(emailForm);

      this.snapshot = { emailSuccss: true, emailCodeSuccess: false };
    } catch (error) {
      this.snapshot = { emailSuccss: false, emailCodeSuccess: false };
    }

    this.publish();
  }

  async postFetchEmailCode(e, form) {
    e.preventDefault();

    const emailCodeForm = { email: form.email, successKey: form.successKey };

    try {
      const data = await emailCheck(emailCodeForm);

      this.snapshot = { emailSuccss: true, emailCodeSuccess: true };
    } catch (error) {
      this.snapshot = { emailSuccss: true, emailCodeSuccess: false };
    }

    this.publish();
  }

  async postFetchRegister(form) {
    const data = await registerUser(form);

    window.location.href = "/login";

    this.resetFetchData();
  }

  async postFetchLogin(form) {
    const data = await loginUser(form);

    window.location.href = "/";

    this.resetFetchData();
  }

  resetFetchData() {
    this.snapshot = {};

    this.publish();
  }
}

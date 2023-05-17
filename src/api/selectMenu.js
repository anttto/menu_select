export default class SelectMenu {
  async lunch() {
    try {
      const response = await fetch(`/data/menus.json`, { method: "GET" });
      const result = await response.json();
      return result.lunch;
    } catch (error) {
      console.error(error);
    }
  }
}

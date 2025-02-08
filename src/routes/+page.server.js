import { getAnimals, newAnimal } from "$lib/server"
export const load = async () => {
    const animals = await getAnimals();
    return { animals }
}
export const actions = {
    newAnimal: async ({ request }) => {
        const form = await request.formData()
        const name = form.get('name')
        const age = form.get('age')
        const { insertId } = newAnimal({ name, age })
    }
}
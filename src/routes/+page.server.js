import { getAnimals, newAnimal, updateAnimal, deleteAnimal } from "$lib/server"
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
    },
    updateAnimal: async ({ request }) => {
        const form = await request.formData()
        const id = form.get('id')
        const name = form.get('name')
        const age = form.get('age')
        updateAnimal({ id, name, age })
    },
    deleteAnimal: async ({ request }) => {
        const form = await request.formData()
        const id = form.get('id')
        deleteAnimal({ id })
    }
}
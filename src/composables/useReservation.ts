import { useForm } from 'vee-validate';
import * as yup from 'yup';

interface ReservationForm {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: string;
    requests?: string;
}

export function useReservation(whatsappNumber: string = "2376XXXXXXXX") {
    const schema = yup.object({
        name: yup.string().required('Le nom est requis'),
        email: yup.string().email('Email invalide').required('L\'email est requis'),
        phone: yup.string().min(8, 'Numéro trop court').required('Le téléphone est requis'),
        date: yup.string().required('La date est requise'),
        time: yup.string().required('L\'heure est requise'),
        guests: yup.string().required(),
        requests: yup.string().nullable()
    });

    // 2. Passer l'interface au useForm
    const { defineField, handleSubmit, errors, isSubmitting } = useForm<ReservationForm>({
        validationSchema: schema,
        initialValues: {
            guests: '2 Guests',
            requests: ''
        }
    });

    const [name] = defineField('name');
    const [email] = defineField('email');
    const [phone] = defineField('phone');
    const [date] = defineField('date');
    const [time] = defineField('time');
    const [guests] = defineField('guests');
    const [requests] = defineField('requests');

    const onSubmit = handleSubmit((values) => {
        const message = `*Nouvelle Réservation OSAN*%0A` +
            `---------------------------%0A` +
            `*Nom:* ${values.name}%0A` +
            `*Email:* ${values.email}%0A` +
            `*Tel:* ${values.phone}%0A` +
            `*Date:* ${values.date}%0A` +
            `*Heure:* ${values.time}%0A` +
            `*Couverts:* ${values.guests}%0A` +
            `*Notes:* ${values.requests || 'Aucune'}`;

        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    });

    return { name, email, phone, date, time, guests, requests, errors, isSubmitting, onSubmit };
}
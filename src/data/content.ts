export const clinicInfo = {
    name: "Central Clinic Jucurutu",
    address: "Rua Otávio Lamartine, 138b, Centro - Jucurutu/RN",
    phone: "(84) 9 9818-3636",
    email: "centralclinicjucurutu@gmail.com",
    whatsappLink: "https://wa.me/5584998183636?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Otávio+Lamartine,+138b,+Centro+-+Jucurutu/RN",
    hours: {
        weekdays: "07:30 - 11:30 | 13:30 - 17:30",
        saturday: "07:30 - 11:30",
    }
};

export const doctors = [
    {
        id: "luiz-fernando-schuh",
        name: "Dr. Luiz Fernando Schuh",
        specialty: "Ortopedia",
        imagePath: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: "amelia-amaral",
        name: "Dra. Amélia Amaral",
        specialty: "Ginecologia e Obstetrícia",
        imagePath: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: "pedro-nunes",
        name: "Dr. Pedro Nunes",
        specialty: "Pediatria",
        imagePath: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=500&auto=format&fit=crop"
    }
];

export interface Service {
    id: string;
    slug: string;
    title: string;
    category: 'especialidade' | 'exame';
    iconName: string;
    shortDescription: string;
    longDescription: string;
    relatedDoctors?: string[];
}

export const services: Service[] = [
    // ESPECIALIDADES
    {
        id: "odontologia",
        slug: "odontologia",
        title: "Odontologia",
        category: "especialidade",
        iconName: "SmilePlus",
        shortDescription: "Cuidado completo com a sua saúde bucal, unindo estética e funcionalidade.",
        longDescription: "Nossa Odontologia oferece uma vasta gama de procedimentos focados na restauração da sua saúde bucal e na melhoria estética do seu sorriso. Realizamos avaliações precisas, ortodontia, clareamento, implantes e cuidados preventivos.",
        relatedDoctors: []
    },
    {
        id: "ginecologia",
        slug: "ginecologia",
        title: "Ginecologia",
        category: "especialidade",
        iconName: "Activity",
        shortDescription: "Cuidado com a saúde da mulher em todas as fases da vida.",
        longDescription: "O acompanhamento ginecológico é fundamental para a saúde da mulher. Nossos serviços incluem exames de rotina, prevenção e tratamento de doenças específicas, além de orientações completas.",
        relatedDoctors: ["amelia-amaral"]
    },
    {
        id: "obstetricia",
        slug: "obstetricia",
        title: "Obstetrícia",
        category: "especialidade",
        iconName: "Baby",
        shortDescription: "Acompanhamento completo e humanizado durante a gestação e o puerpério.",
        longDescription: "A gravidez é um momento único. Oferecemos assistência obstétrica completa para garantir que você e seu bebê tenham uma jornada saudável.",
        relatedDoctors: ["amelia-amaral"]
    },
    {
        id: "pediatria",
        slug: "pediatria",
        title: "Pediatria",
        category: "especialidade",
        iconName: "Users",
        shortDescription: "Atenção clínica e acompanhamento do desenvolvimento para crianças e adolescentes.",
        longDescription: "A infância merece cuidadores dedicados. A pediatria na Central Clinic busca não apenas tratar doenças infantis, mas também realizar a prevenção e o acompanhamento do desenvolvimento.",
        relatedDoctors: ["pedro-nunes"]
    },
    {
        id: "mastologia",
        slug: "mastologia",
        title: "Mastologia",
        category: "especialidade",
        iconName: "HeartPulse",
        shortDescription: "Prevenção, diagnóstico e tratamento de doenças da mama.",
        longDescription: "A Mastologia é dedicada à saúde das mamas. Atuamos fortemente na prevenção, orientando o diagnóstico precoce e realizando acompanhamentos contínuos.",
        relatedDoctors: []
    },
    {
        id: "psicologia",
        slug: "psicologia",
        title: "Psicologia",
        category: "especialidade",
        iconName: "Brain",
        shortDescription: "Apoio emocional e psicoterapia focada na sua saúde mental e bem-estar.",
        longDescription: "Saúde também é estar de bem consigo mesmo. Nosso setor de Psicologia realiza acolhimento terapêutico e acompanhamento psicológico individual.",
        relatedDoctors: []
    },
    {
        id: "fisioterapia",
        slug: "fisioterapia",
        title: "Fisioterapia",
        category: "especialidade",
        iconName: "Stethoscope",
        shortDescription: "Reabilitação, controle de dores e melhoria do rendimento físico.",
        longDescription: "Por meio da fisioterapia, restauramos os movimentos e minimizamos dores causadas por lesões, pós-operatórios ou condições crônicas.",
        relatedDoctors: []
    },
    {
        id: "nutricao",
        slug: "nutricao",
        title: "Nutrição",
        category: "especialidade",
        iconName: "Apple",
        shortDescription: "Planos alimentares personalizados para alcançar seus objetivos com saúde.",
        longDescription: "Uma alimentação equilibrada transforma a sua disposição e previne doenças. Nossos especialistas elaboram planos nutricionais estruturados.",
        relatedDoctors: []
    },
    {
        id: "estetica-intima",
        slug: "estetica-intima",
        title: "Estética Íntima",
        category: "especialidade",
        iconName: "Sparkles",
        shortDescription: "Tratamentos modernos para cuidados íntimos e aumento de autoestima.",
        longDescription: "Cuidar do próprio corpo é empoderador. A Estética Íntima engloba procedimentos seguros, realizados por profissionais capacitados.",
        relatedDoctors: []
    },
    {
        id: "cirurgiao-vascular",
        slug: "cirurgiao-vascular",
        title: "Cirurgião Vascular",
        category: "especialidade",
        iconName: "Activity",
        shortDescription: "Tratamento para varizes, trombose e outras doenças circulatórias.",
        longDescription: "O cirurgião vascular cuida do sistema circulatório, prevenindo e tratando doenças das artérias, veias e vasos linfáticos.",
        relatedDoctors: []
    },
    // EXAMES
    {
        id: "ultrassonografia",
        slug: "ultrassonografia",
        title: "Ultrassonografia",
        category: "exame",
        iconName: "Activity",
        shortDescription: "Exames de imagem precisos para diagnósticos seguros e acompanhamento.",
        longDescription: "A ultrassonografia permite visualizar órgãos e estruturas internas em tempo real, sendo essencial para diagnósticos preventivos e acompanhamento pré-natal.",
        relatedDoctors: []
    },
    {
        id: "preventivo",
        slug: "preventivo",
        title: "Preventivo",
        category: "exame",
        iconName: "Microscope",
        shortDescription: "Exame fundamental para a saúde feminina e prevenção do câncer de colo de útero.",
        longDescription: "O exame preventivo (Papanicolau) é a principal estratégia para detectar precocemente alterações nas células do colo do útero.",
        relatedDoctors: ["amelia-amaral"]
    },
    {
        id: "optometria",
        slug: "optometria",
        title: "Optometria",
        category: "exame",
        iconName: "Eye",
        shortDescription: "Avaliação da acuidade visual e saúde primária dos olhos.",
        longDescription: "A optometria foca na detecção de problemas de refração e na prescrição de lentes corretivas para garantir uma visão clara.",
        relatedDoctors: []
    },
    {
        id: "endoscopia",
        slug: "endoscopia",
        title: "Endoscopia",
        category: "exame",
        iconName: "Stethoscope",
        shortDescription: "Exame detalhado do sistema digestivo superior (esôfago, estômago e duodeno).",
        longDescription: "A endoscopia digestiva alta é realizada para investigar dores abdominais, refluxo, gastrites e outras condições gástricas.",
        relatedDoctors: []
    },
    {
        id: "colonoscopia",
        slug: "colonoscopia",
        title: "Colonoscopia",
        category: "exame",
        iconName: "Stethoscope",
        shortDescription: "Exame para visualização do intestino grosso e parte do intestino delgado.",
        longDescription: "A colonoscopia é vital para a prevenção do câncer colorretal e diagnóstico de anemias, dores e alterações intestinais.",
        relatedDoctors: []
    }
];

export const insurances = [
    { id: "clini-med", name: "Clini Med", logoPath: "/insurances/clini-med.webp" },
    { id: "uniplan", name: "UNIPLAN", logoPath: "/insurances/uniplan.webp" },
    { id: "lifeplan", name: "LifePlan", logoPath: "/insurances/lifeplan.webp" },
    { id: "br-saude", name: "BR Saúde", logoPath: "/insurances/br-saude.webp" },
    { id: "multiplano", name: "Multiplano +", logoPath: "/insurances/multiplano.webp" }
];

interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'luiz.azevedo@lfaazevedo.com.br',
      name: 'Luiz Azevedo',
    },
  },
} as IMailConfig;

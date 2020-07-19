import handlebars from 'handlebars';
import fs from 'fs';

import IParseMailTemplateProvider from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateProvider): Promise<string> {
    const templateFileContet = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContet);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;

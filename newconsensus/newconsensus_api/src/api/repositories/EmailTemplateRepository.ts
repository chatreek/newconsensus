/*
 * @license NewConsensus Platform v0.1
 * (c) 2020-2021 KaoGeek. http://kaogeek.dev
 * License: MIT. https://opensource.org/licenses/MIT
 * Author: chalucks <chaluck.s@absolute.co.th>, shiorin <junsuda.s@absolute.co.th>
 */
 
import { EntityRepository, Repository } from 'typeorm';
import {EmailTemplate} from '../models/EmailTemplate';

@EntityRepository(EmailTemplate)
export class EmailTemplateRepository extends Repository<EmailTemplate>  {

}

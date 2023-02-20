import { ParticipationMemberPerTeamModel, DefaultMemberModel, ParticipationMemberModel } from './model/member-info-model';
import VisiterMember from '../VisiterMember.vue'

// export default class VisiterMemberTs{
    // // 選手情報
    // private MemberInfo: DefaultMemberModel;
    // // 出場選手情報
    // public ParticipationMemberInfo: ParticipationMemberPerTeamModel;

    export function click(): ParticipationMemberPerTeamModel {
        alert('yeah');
        const data = new ParticipationMemberPerTeamModel();
        data.LeadOff.Number = 9;
        data.LeadOff.Position = '8';
        data.LeadOff.Name = '秋山';
        data.Second.Number = 37;
        data.Second.Position = '9';
        data.Second.Name = '野間';
        data.Third.Number = 5;
        data.Third.Position = '7';
        data.Third.Name = '西川';
        data.Forth.Number = 10;
        data.Forth.Position = '3';
        data.Forth.Name = 'マクブルーム';
        data.Fifth.Number = 31;
        data.Fifth.Position = '2';
        data.Fifth.Name = '坂倉';
        data.Sixth.Number = 95;
        data.Sixth.Position = '5';
        data.Sixth.Name = 'デビッドソン';
        data.Seventh.Number = 51;
        data.Seventh.Position = '6';
        data.Seventh.Name = '小園';
        data.Eighth.Number = 33;
        data.Eighth.Position = '4';
        data.Eighth.Name = '菊池';
        data.Ninth.Number = 18;
        data.Ninth.Position = '1';
        data.Ninth.Name = '森下';
        return data;
    }

// }

import { Component, OnInit } from '@angular/core';
import { AbstractPage } from '../../AbstractPage.component';
import { MatDialog } from '@angular/material/dialog';
import { DebateFacade } from '../../../../services/facade/DebateFacade.service';

const PAGE_NAME: string = "debate_logs";

@Component({
    selector: 'admin-debate-logs-page',
    templateUrl: './DebateLogsPage.component.html'
})
export class DebateLogsPage extends AbstractPage implements OnInit {

    public static readonly PAGE_NAME: string = PAGE_NAME;

    private debateFacade: DebateFacade;

    constructor(debateFacade: DebateFacade, dialog: MatDialog) {
        super(PAGE_NAME, dialog);
        this.debateFacade = debateFacade;
        this.fieldTable = [
            {
                name: "id",
                label: "รหัส",
                width: "200pt",
                class: "", formatColor: false, formatImage: false,
                link: [], 
                formatDate: false,
                formatId: true,
                align: "center"
            },
        ]
        this.actions = { isOfficial: false, isBan: false,
            isApprove: false,
            isCreate: false,
            isEdit: false,
            isDelete: false,
            isComment: false,
            isBack: false
        };
    }

    public ngOnInit() {
    }
}

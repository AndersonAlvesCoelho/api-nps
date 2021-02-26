import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Surveys } from "./Surveys";
import { User } from "./User";

@Entity("surveys_users")
class SurveysUsers {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    users_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "users_id" })
    users: User;

    @Column()
    surveys_id: string;

    @ManyToOne(() => Surveys)
    @JoinColumn({ name: "surveys_id" })
    surveys: Surveys

    @Column()
    value: number;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { SurveysUsers };

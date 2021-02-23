import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    create_at: Date;

    /*
    * verificar ID
    * true:  UPDATE REGISTRO
    * FALSE: NEW REGISTRO
    */
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { User };

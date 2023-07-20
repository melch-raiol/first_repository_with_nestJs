import { Body, Controller, Post, Get, Query, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dtos';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros.pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService){}

    @Post()
    @UsePipes(ValidationPipe)
    async criarAtualizarJogador(
        @Body() criarJogadorDto: CriarJogadorDto){
         await this.jogadoresService.criarAtualizarJogador(criarJogadorDto)
    }

    @Get()
    async consultarJogador(
        @Query('email', JogadoresValidacaoParametrosPipe) email: string): Promise<Jogador[] | Jogador>{
            if(email){
                return  await this.jogadoresService.consultarJogadorPeloEmail(email)
            }
        return await this.jogadoresService.consultarTodosJogadores();
    }

    @Delete()
    async deletarJogador(
        @Query('email', JogadoresValidacaoParametrosPipe) email: string): Promise<void>{
            this.jogadoresService.deletarJogador(email)
        }
}

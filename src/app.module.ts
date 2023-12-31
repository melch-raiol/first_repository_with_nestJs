import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://melchraiol:uF0N87muOq8tFa9M@cluster0.gzzxy2i.mongodb.net/?retryWrites=true&w=majority'),
    // { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false}),
    JogadoresModule,
    CategoriasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


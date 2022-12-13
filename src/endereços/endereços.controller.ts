import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EndereçosService } from './endereços.service';
import { CreateEndereçoDto } from './dto/create-endereço.dto';
import { UpdateEndereçoDto } from './dto/update-endereço.dto';

@Controller('enderecos')
export class EndereçosController {
  constructor(private readonly endereçosService: EndereçosService) {}

  @Post()
  create(@Body() createEndereçoDto: CreateEndereçoDto) {
    return this.endereçosService.create(createEndereçoDto);
  }

  @Get()
  findAll() {
    return this.endereçosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.endereçosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEndereçoDto: UpdateEndereçoDto,
  ) {
    return this.endereçosService.update(+id, updateEndereçoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.endereçosService.remove(+id);
  }
}

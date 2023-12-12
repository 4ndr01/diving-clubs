import { Address } from '../@models/address';
import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { AddressesService } from './addresses.service';
import { ApiTags } from "@nestjs/swagger";
import { AddressDto } from "../@models/address-dto";

@ApiTags('addresses')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly Service: AddressesService) {}

  @Get('/')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAddresses(@Res() res) {
    const addresses = await this.Service.getAddresses();
    res.status(200).json(addresses);
  }

  @Get('/:id')
  async getAddress(@Res() res, @Param('id') id: number) {
    const address = await this.Service.getAddress(id);
    res.status(200).json(address);
  }

  @Post('/')
  async createAddress(@Res() res, @Body() createItem: AddressDto) {
    const newItem = await this.Service.saveAdress(createItem);
    res.status(201).json(newItem);
  }
}

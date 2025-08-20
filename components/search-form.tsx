import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchForm() {
  return (
    <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg p-6 mx-4 -mt-16 relative z-10 max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input type="radio" name="grain-type" value="soja" defaultChecked className="text-verde-campo" />
            <span className="text-sm font-medium">Soja</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="grain-type" value="milho" className="text-verde-campo" />
            <span className="text-sm font-medium">Milho</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="grain-type" value="feijao" className="text-verde-campo" />
            <span className="text-sm font-medium">Feijão</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="grain-type" value="arroz" className="text-verde-campo" />
            <span className="text-sm font-medium">Arroz</span>
          </label>
        </div>

        <div className="flex-1 min-w-[200px]">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mt">Mato Grosso</SelectItem>
              <SelectItem value="go">Goiás</SelectItem>
              <SelectItem value="pr">Paraná</SelectItem>
              <SelectItem value="rs">Rio Grande do Sul</SelectItem>
              <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
              <SelectItem value="mg">Minas Gerais</SelectItem>
              <SelectItem value="ba">Bahia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma cidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sorriso">Sorriso</SelectItem>
              <SelectItem value="rio-verde">Rio Verde</SelectItem>
              <SelectItem value="primavera">Primavera do Leste</SelectItem>
              <SelectItem value="cristalina">Cristalina</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-8 transition-colors">
          BUSCAR
        </Button>
      </div>
    </div>
  )
}

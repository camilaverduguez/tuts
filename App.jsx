import { useState } from "react"

export default function CalculadoraFarolTutoria() {
  const criterios = ["Responsabilidade (R)", "Iniciativa (I)", "Cooperação (C)", "Solidariedade (S)", "Autonomia (A)"]
  const [cores, setCores] = useState(Array(5).fill(""))
  const [nota, setNota] = useState(null)

  const calcularNota = () => {
    const verdes = cores.filter(cor => cor === "🟢").length
    const vermelhos = cores.filter(cor => cor === "🔴").length

    let notaFinal = 8
    if (vermelhos > 0) {
      notaFinal = 6
    } else {
      const notas = [8, 8.4, 8.8, 9.2, 9.6, 10]
      notaFinal = notas[verdes]
    }
    setNota(notaFinal)
  }

  const atualizarCor = (index, cor) => {
    const novasCores = [...cores]
    novasCores[index] = cor
    setCores(novasCores)
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1>Calculadora de Tutoria (Farol)</h1>
      {criterios.map((criterio, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <label>{criterio}</label>
          <select onChange={(e) => atualizarCor(index, e.target.value)} defaultValue="">
            <option value="">Selecionar</option>
            <option value="🟢">🟢</option>
            <option value="🟡">🟡</option>
            <option value="🔴">🔴</option>
          </select>
        </div>
      ))}
      <button onClick={calcularNota} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>Calcular Nota Final</button>
      {nota !== null && (
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>Nota Final: {nota.toFixed(1)}</div>
      )}
    </div>
  )
}